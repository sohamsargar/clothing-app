import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../../collection-preview/collection-preview";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../../Redux/shop/shop.selector";
const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
