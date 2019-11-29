import React, { Component } from "react";
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Button,
  Text
} from "react-native";
import { withNavigation } from "react-navigation";
import Colors from "../../constants/Colors";
import { TouchableOpacity } from "../commons/TouchableOpacity";
import { LinearGradient } from "expo-linear-gradient";

// import Button from ".//button";

const { width, height } = Dimensions.get("window");

class Swiper extends Component {
  static defaultProps = {
    horizontal: true,
    pagingEnabled: true,
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false,
    bounces: false,
    scrollsToTop: false,
    removeClippedSubviews: true,
    automaticallyAdjustContentInsets: false,
    index: 0
  };

  state = this.initState(this.props);

  initState(props) {
    const total = props.children ? props.children.length || 1 : 0,
      index = total > 1 ? Math.min(props.index, total - 1) : 0,
      offset = width * index;

    const state = {
      total,
      index,
      offset,
      width,
      height
    };

    this.internals = {
      isScrolling: false,
      offset
    };

    return state;
  }

  /**
   * Scroll begin handler
   * @param {object} e native event
   */
  onScrollBegin = e => {
    this.internals.isScrolling = true;
  };

  /**
   * Scroll end handler
   * @param {object} e native event
   */
  onScrollEnd = e => {
    this.internals.isScrolling = false;

    this.updateIndex(
      e.nativeEvent.contentOffset
        ? e.nativeEvent.contentOffset.x
        : // When scrolled with .scrollTo() on Android there is no contentOffset
          e.nativeEvent.position * this.state.width
    );
  };

  /*
   * Drag end handler
   * @param {object} e native event
   */
  onScrollEndDrag = e => {
    const {
        contentOffset: { x: newOffset }
      } = e.nativeEvent,
      { children } = this.props,
      { index } = this.state,
      { offset } = this.internals;
    if (
      offset === newOffset &&
      (index === 0 || index === children.length - 1)
    ) {
      this.internals.isScrolling = false;
    }
  };

  /**
   * Update index after scroll
   * @param {object} offset content offset
   */
  updateIndex = offset => {
    const state = this.state,
      diff = offset - this.internals.offset,
      step = state.width;
    let index = state.index;

    if (!diff) {
      return;
    }

    index = parseInt(index + Math.round(diff / step), 10);

    this.internals.offset = offset;
    this.setState({
      index
    });
  };

  /**
   * Swipe one slide forward
   */
  swipe = () => {
    if (this.internals.isScrolling || this.state.total < 2) {
      return;
    }

    const state = this.state,
      diff = this.state.index + 1,
      x = diff * state.width,
      y = 0;

    // Call scrollTo on scrollView component to perform the swipe
    this.scrollView && this.scrollView.scrollTo({ x, y, animated: true });

    // Update internal scroll state
    this.internals.isScrolling = true;

    // Trigger onScrollEnd manually on android
    if (Platform.OS === "android") {
      setImmediate(() => {
        this.onScrollEnd({
          nativeEvent: {
            position: diff
          }
        });
      });
    }
  };

  /**
   * Render ScrollView component
   * @param {array} slides to swipe through
   */
  renderScrollView = pages => {
    return (
      <ScrollView
        ref={component => {
          this.scrollView = component;
        }}
        {...this.props}
        contentContainerStyle={[styles.wrapper, this.props.style]}
        onScrollBeginDrag={this.onScrollBegin}
        onMomentumScrollEnd={this.onScrollEnd}
        onScrollEndDrag={this.onScrollEndDrag}
      >
        {pages.map((page, i) => (
          // Render each slide inside a View
          <View style={[styles.fullScreen, styles.slide]} key={i}>
            {page}
          </View>
        ))}
      </ScrollView>
    );
  };

  /**
   * Render pagination indicators
   */
  renderPagination = () => {
    if (this.state.total <= 1) {
      return null;
    }

    const ActiveDot = <View style={[styles.dot, styles.activeDot]} />,
      Dot = <View style={styles.dot} />;

    let dots = [];

    for (let key = 0; key < this.state.total; key++) {
      dots.push(
        key === this.state.index
          ? // Active dot
            React.cloneElement(ActiveDot, { key })
          : // Other dots
            React.cloneElement(Dot, { key })
      );
    }

    return (
      <View pointerEvents="none" style={[styles.pagination, styles.fullScreen]}>
        {dots}
      </View>
    );
  };

  renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={{ fontSize: 20 }}>Vitz Pay</Text>
      </View>
    );
  };

  renderButton = () => {
    const lastScreen = this.state.index === this.state.total - 1;
    return (
      <View
        pointerEvents="box-none"
        style={[styles.buttonWrapper, styles.fullScreen]}
      >
        <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.buttonStyle}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "transparent",
              width: "100%",
              alignItems: "center"
            }}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("SignUp")}
          >
            <Text
              style={{
                color: "#FFFFFF",
                paddingVertical: 10,
                fontSize: 18,
                fontWeight: "500"
              }}
            >
              Create Account
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 30
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SignIn")}
            style={{ marginLeft: 14 }}
          >
            <Text
              style={{ color: Colors.accent, fontSize: 20, fontWeight: "600" }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  /**
   * Render the component
   */
  render = ({ children } = this.props) => {
    return (
      <View style={[styles.container, styles.fullScreen]}>
        {this.renderScrollView(children)}
        {/* {this.renderHeader()} */}
        {this.renderPagination()}
        {this.renderButton()}
      </View>
    );
  };
}

export default withNavigation(Swiper);

const styles = StyleSheet.create({
  fullScreen: {
    width: width,
    height: height
  },
  // Main container
  container: {
    backgroundColor: "transparent",
    position: "relative"
  },
  // Slide
  slide: {
    backgroundColor: "transparent"
  },
  headerContainer: {
    position: "absolute",
    top: 30,
    alignItems: "center",
    // backgroundColor: "orange",
    width: "100%"
  },
  headerText: {},
  pagination: {
    position: "absolute",
    bottom: 200,
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "transparent"
  },
  // Pagination dot
  dot: {
    backgroundColor: "rgba(0,0,0,.25)",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  // Active ;dot
  activeDot: {
    backgroundColor: Colors.accent
  },
  buttonStyle: {
    // backgroundColor: Colors.PRIMARY,
    borderWidth: 0,
    // color: "#FFFFFF",
    borderColor: Colors.PRIMARY,
    height: 40,
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 30,
    width: "80%"
  },
  buttonWrapper: {
    backgroundColor: "transparent",
    flexDirection: "column",
    position: "absolute",
    bottom: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 80,
    justifyContent: "flex-end",
    alignItems: "center"
  }
});
