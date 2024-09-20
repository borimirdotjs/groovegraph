import { Box, NavLink } from "@mantine/core";

import { FC, useState } from "react";
import { NAV_LINKS } from "@/app/config/navlinks";
import Link from "next/link";

const NavBar: FC = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <Box>
      {NAV_LINKS.map((link, idx) => (
        <NavLink
          component={Link}
          href={link.href}
          c="green"
          key={link.label}
          active={idx === active}
          label={link.label}
          leftSection={idx === active ? <link.activeIcon size="1rem" /> : <link.icon size="1rem" />}
          onClick={() => setActive(idx)}
        />
      ))}
    </Box>
  );
};

export default NavBar;
