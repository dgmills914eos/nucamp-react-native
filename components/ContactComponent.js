import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact'
    }

    render() {
        return (
            <ScrollView>
              <Card
                featuredTitle={"Contact Information"}
                wrapperStyle={{margin: 10}}
                >
                <Text>1 Nucamp Way</Text>
                <Text>Seattle, WA 98001</Text>
                <Text>U.S.A.</Text>
                <Text></Text>
                <Text>Phone: 1-206-555-1234</Text>
                <Text>Email: campsites@nucamp.co</Text>
            </Card>
            </ScrollView>
        );
    }
}

export default Contact;