import {
  Avatar,
  Button,
  ClickAwayListener,
  Collapse,
  Grow,
  List,
  ListItem,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";
import { ArrowDropDown, ArrowDropUp, Language } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";

const menus = [
  { title: "english", lang: "en", endpoint: "US" },
  { title: "korean", lang: "kr", endpoint: "KR" },
  { title: "vietnamese", lang: "vi", endpoint: "VN" },
];
function BtnsLanguages() {
  const { languages } = useParams();
  const [open, setOpen] = useState(false);
  const [langSelected, setLangSelected] = useState(menus[0]);
  const [anchor, setAnchor] = useState();
  const history = useHistory();
  const location = useLocation();
  const handleClick = (e) => {
    setOpen(!open);
    if (e) {
      setAnchor(e.currentTarget);
    }
  };
  const handleChangeLang = (lang) => {
    const oldPathName = location.pathname;
    const newPathName = oldPathName.replace(languages, lang);
    history.push(newPathName);
  };
  useEffect(() => {
    const found = menus.find((e) => e.lang === languages);
    if (found) {
      setLangSelected(found);
    }
  }, [languages]);
  return (
    <>
      <Button onClick={handleClick} className="btn-lang">
        <Language /> {langSelected.title}
        {open ? <ArrowDropUp /> : <ArrowDropDown />}
      </Button>
      <Popper open={open} anchorEl={anchor}>
        <Paper
          style={{
            backgroundColor: "#222d3a",
            color: "#fff",
            textTransform: "capitalize",
          }}
        >
          <ClickAwayListener onClickAway={handleClick}>
            <MenuList
              autoFocusItem={open}
              id="menu-list-grow"
              //   onKeyDown={handleListKeyDown}
            >
              {menus
                ? menus.map((item) => (
                    <MenuItem
                      key={item.lang}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleClick();
                        handleChangeLang(item.lang);
                      }}
                      className="txt-tit"
                    >
                      <Avatar
                        style={{
                          width: "20px",
                          height: "20px",
                          marginRight: "10px",
                        }}
                      >
                        <img
                          alt="United States"
                          src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${item.endpoint}.svg`}
                        />
                      </Avatar>
                      {item.title}
                    </MenuItem>
                  ))
                : null}
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
      {/* <Collapse in={open}>
        <List>
          {menus
            ? menus.map((item) => (
                <ListItem
                  key={item.lang}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleClick();
                    handleChangeLang(item.lang);
                  }}
                  className="txt-tit"
                >
                  {item.title}
                </ListItem>
              ))
            : null}
        </List>
      </Collapse> */}
    </>
  );
}

export default BtnsLanguages;
