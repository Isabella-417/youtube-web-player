import PropTypes from "prop-types";

import { List } from "../../molecules/List/List";

export const ListCards = (props) => (
  <div>
    <List
      onClick={props.onClickSongHandle}
      data={props.data}
      renderKey={props.renderKey}
    />
  </div>
);

ListCards.propTypes = {
  onClickSongHandle: PropTypes.func,
  renderKey: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};

ListCards.defaultProps = {
  renderKey: "label",
  onClickSongHandle: null,
  data: [{}],
};
