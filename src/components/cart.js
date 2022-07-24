import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productsActions from "../store/actions/produt.actions";
import * as cartActions from "../store/actions/cart.actions";

class Cart extends Component {
  componentDidMount() {
    // 3. 向服务器端发送请求， 获取购物车列表数据（初始化的列表数据）
    this.props.loadCarts();
  }

  changeProductNumber(cid, event) {
    // 获取商品的最新数量
    const count = event.target.value;
    // 向服务器端发送请求， 告诉服务器我们要将 哪一个商品的数量更改成什么
    this.props.changeServiceProductNumber({ cid, count });
  }

  render() {
    return (
      <section className="container content-section">
        <h2 className="section-header">购物车</h2>
        <div className="cart-row">
          <span className="cart-item cart-header cart-column">商品</span>
          <span className="cart-price cart-header cart-column">价格</span>
          <span className="cart-quantity cart-header cart-column">数量</span>
        </div>
        <div className="cart-items">
          {this.props.carts.map((product) => {
            return (
              <div className="cart-row" key={product.id}>
                <div className="cart-item cart-column">
                  <img
                    className="cart-item-image"
                    src={product.thumbnail}
                    width="100"
                    height="100"
                  />
                  <span className="cart-item-title">{product.title}</span>
                </div>
                <span className="cart-price cart-column">{`￥${product.price}`}</span>
                <div className="cart-quantity cart-column">
                  {/* input 元素 有value属性，添加value属性的时候必须添加onchange属性 */}
                  <input
                    className="cart-quantity-input"
                    type="number"
                    value={product.count}
                    onChange={(event) => {
                      this.changeProductNumber(product.id, event);
                    }}
                  />
                  <button
                    onClick={() => {
                      this.props.deleteProductFromCart(product.id);
                    }}
                    className="btn btn-danger"
                    type="button"
                  >
                    删除
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-total">
          <strong className="cart-total-title">总价</strong>
          <span className="cart-total-price">￥39.97</span>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  carts: state.carts,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(productsActions, dispatch),
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
