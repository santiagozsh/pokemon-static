import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Link as NextUILink } from "@nextui-org/link";
import Link from "next/link";

export const NavbarComponent = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Navbar isBordered className="text-foreground bg-background">
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="Pokemon"
        width={70}
        height={70}
      />

      <NavbarBrand>
        <Link href="/" legacyBehavior passHref>
          <NextUILink color="foreground">
            <p className="font-light text-4xl">P</p>
            <p className="font-light text-xl">ókemon</p>
          </NextUILink>
        </Link>
      </NavbarBrand>

      <WbSunnyOutlinedIcon
        className="transition duration-150 ease-out hover:ease-in"
        onClick={() => setTheme("light")}
      >
        Light Mode
      </WbSunnyOutlinedIcon>
      <DarkModeOutlinedIcon
        className="transition duration-150 ease-in-out"
        onClick={() => setTheme("dark")}
      >
        Dark Mode
      </DarkModeOutlinedIcon>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/favorites" legacyBehavior passHref>
            <NextUILink color="foreground">
              <p >Favoritos</p>
            </NextUILink>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
