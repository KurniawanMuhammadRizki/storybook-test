import { IconButton } from "@chakra-ui/react";
import { HiOutlineDotsVertical } from "react-icons/hi";

interface ActionButtonProps {
  onClick?: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ onClick }) => {
  return (
    <IconButton
      aria-label="actions"
      role="button"
      as="button"
      width="32px"
      height="32px"
      background="transparent"
      _hover={{ background: "gray.100" }}
      _active={{ background: "gray.200" }}
      _focus={{ boxShadow: "none" }}
      onClick={onClick}>
      <HiOutlineDotsVertical size={20} color="black" />
    </IconButton>
  );
};
