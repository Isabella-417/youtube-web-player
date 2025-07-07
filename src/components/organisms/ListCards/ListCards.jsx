import PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "../../../context/context";

import { Card } from "../../molecules/Card/Card";
import { List } from "../../molecules/List/List";

export const ListCards = (props) => {
  const { data, focus, renderKey }  = props;
  const { updatePlaylist } = useContext(Context);

  return (
    <Card>
        <List data={data} handleSelect={updatePlaylist} renderKey={renderKey} focus={focus} />
    </Card>
  );
};

ListCards.propTypes = {
  renderKey: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};

ListCards.defaultProps = {
  renderKey: "label",
  data: [{}],
};
