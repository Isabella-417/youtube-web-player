import PropTypes from "prop-types";

import { Card } from "../../molecules/Card/Card";
import { List } from "../../molecules/List/List";

export const ListCards = (props) => (
  <Card>
    <div>
      <List
        data={props.data}
        renderKey={props.renderKey}
      />
    </div>
  </Card>
);

ListCards.propTypes = {
  renderKey: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};

ListCards.defaultProps = {
  renderKey: "label",
  data: [{}],
};
