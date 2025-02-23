import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { RootState } from "../../redux/store";
import { loginUser } from "../../redux/slices/authSlice";
import Input from "../Reusable/Input";
import Button from "../Reusable/Button";
import getDeviceId from "../../utils/getDeviceId";
import { Link } from "react-router";
import Card from "../Reusable/Card";

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [form, setForm] = useState({
    email: "",
    password: "",
    device_id: getDeviceId(),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(loginUser(form)).unwrap();
  };

  return (
    <div className="flex items-center justify-center mt-12">
      <Card className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4">
        <form onSubmit={handleSubmit}>
          <div className="text-xl mb-2">Login</div>
          <Input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <Button
            type="submit"
            disabled={loading}
            isLoading={loading}
            variant="primary"
          >
            Login
          </Button>
          <Button variant="link" type="button" className="mt-3">
            <Link to={"/register"}>Don't have an account? Register</Link>
          </Button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </Card>
    </div>
  );
};

export default Login;
