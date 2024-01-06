import React from "react";
import { View, Text, Button } from "react-native";

class Component extends React.Component {
    /**
     * 만약 boolean 값에 따라 실행되는 함수형 컴포넌트가 있을 때
     * 그 값이 true이면 custructor > render > didMount 순으로 한 번 실행 되고
     * 컴포넌트 내에서 prop이나 state 값이 변경될 때마다 render > didUpdate 순으로 실행됨
     * 그리고 컴포넌트가 실행되는 boolean 값이 false로 변경되어 컴포넌트가 종료되면 종료 직전에 wullUnmount 실행됨
     */

    constructor(props) {
        console.log("constructor");
        super(props);
        this.state = {
        count: 0,
        };
    }

    componentDidMount() {
        console.log("didMount");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        console.log("render");
        return (
        <View>
            <Text>You clicked {this.state.count} times</Text>
            <Button
            title="Click me"
            onPress={() => this.setState({ count: this.state.count + 1 })}
            />
        </View>
        );
    }
}

export default Component;