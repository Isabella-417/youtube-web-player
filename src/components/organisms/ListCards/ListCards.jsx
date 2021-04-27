import PropTypes from "prop-types";

import { Card } from "../../molecules/Card/Card";
import { List } from "../../molecules/List/List";

export const ListCards = (props) => (
  <Card>
    <div>
      <List
        onClick={props.onClickSongHandle}
        data={props.data}
        renderKey={props.renderKey}
      />
    </div>
  </Card>
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
