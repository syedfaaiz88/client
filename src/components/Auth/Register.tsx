import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { RootState } from "../../redux/store";
import { registerUser } from "../../redux/slices/authSlice";
import Input from "../Reusable/Input";
import Button from "../Reusable/Button";
import { Link } from "react-router";
import Card from "../Reusable/Card";

const Register: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [form, setForm] = useState({ fullName: "", email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerUser(form));
  };

  return (
    <div className="flex items-center justify-center mt-12">
      <Card className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4">
        <form onSubmit={handleSubmit}>
          <div className="text-xl mb-2">Register</div>
          <Input
            type="text"
            placeholder="Full Name"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            required
          />
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
            Register
          </Button>
          <Button variant="link" type="button" className="mt-3">
            <Link to={"/login"}>Already registered? Log in</Link>
          </Button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </Card>
    </div>
  );
};

export default Register;
