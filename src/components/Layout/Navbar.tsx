import { PROJECT_NAME } from "../../constants/env.constants"
import Button from "../Reusable/Button"
import ThemeChooser from "../ThemeChooser"

const Navbar = () => {
  return (
    <header className="bg-card py-2 px-8 border-b border-border">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
            {PROJECT_NAME}
        </div>
        <div className="flex gap-2 items-center">
        <ThemeChooser/>
        <Button secondary children="About us"/>
        </div>
      </div>
    </header>
  )
}

export default Navbar