import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Container = styled.div`
  height: 60px;
  /* background-color: lightgray; */
`;

const Wrapper = styled.div`
  padding: 5px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
`;

const SearchContainer = styled.div`
  align-items: center;
  display: flex;
  border: 0.5px solid lightgray;
  border-radius: 80px;
  padding: 5px;
  margin-left: 30px;
`;

const Input = styled.input`
  padding: 5px 20px;
  margin-left: 10px;
  margin-right: 10px;
  border: none;
  border-radius: 80px
  align-items: center;
  /* background-color: gray; */
`;

const Left = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
`;

const Logo = styled.h1 `
  font-weight: bold;
  align-items: center;
`

const Center = styled.div`
  flex: 1;
  align-items: center;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div `
  font-size: 14px;
  align-items: center;
  pointer: cursor;
  margin-left: 10px;
  margin-right: 10px;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
        </Left>
        <Center><Logo>Parzival E-Commerce</Logo></Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
          <Badge>
            <ShoppingCartOutlined/>
          </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
