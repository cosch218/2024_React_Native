import React, { useEffect, useState } from "react";
import { View, Text, Button, TextInput, Switch, ActivityIndicator } from "react-native";

const Component = () => {
    /**
     * 함수형 컴포넌트에는 컴포넌트가 실행될 때 cunstructor의 역할을 하는 것이 없음, 렌더는 리턴문이 담당하긴 하지만 리턴 문에서 콘솔 로그를 확인할 수 없음
     * 클래스형 컴포넌트의 didMount, didUpdate, willUnmount 를 useEffect로 다룸
     * useEffect(()=>{}, [])
     * useEffect의 두번째 인자([]) : 의존성 배열로 이 안의 값들이 바뀌었을 떄 첫번째 인자에 있는 함수를 호출함
     */
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(true);
    const [input, setInput] = useState("");
    const [isRefresh, setIsRefresh] = useState(false);

    useEffect(() => {
        console.log('didMount')
    }, []);

    useEffect(() => {
        console.log('didUpdate-count', count)
    }, [count]);

    useEffect(() => {
        console.log('didUpdate-isOn', isOn)
    }, [isOn]);

    useEffect(() => {
        console.log('didUpdate-input', input)
    }, [input]);

    useEffect(() => {
        if (isRefresh) {
            setTimeout(() => {
                setIsRefresh(false)
            }, 2000)
        }
    }, [isRefresh]);

    return (
        <View style={{ alignItems: "center" }}>
        <Text>You clicked {count} times</Text>
        <Button title="Click me" onPress={() => setCount(count + 1)} />

        <Text style={{ marginVertical: 15 }}>
            -------------------------------------------------
        </Text>
        <Switch value={isOn} onValueChange={setIsOn} />

        <Text style={{ marginVertical: 15 }}>
            -------------------------------------------------
        </Text>

        <Text>input: {input}</Text>
        <TextInput
            value={input}
            onChangeText={setInput}
            style={{ borderBottomWidth: 1, borderColor: "grey" }}
        />

        <Text style={{ marginVertical: 15 }}>
            -------------------------------------------------
        </Text>
        <Button title="새로고침!" onPress={() => setIsRefresh(true)} />
        {isRefresh && <ActivityIndicator />}
        </View>
    );
};

export default Component;