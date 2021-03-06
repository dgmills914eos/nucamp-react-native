import React, { Component } from 'react';
import { Text, ScrollView, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import Partners from './shared/partners.js';


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }

const Mission = () => {
    return (
        <Card
        Title={"Our Mission"}
        >
        <Text>
            We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
        </Text>
        </Card>
    )
}

    static navigationOptions = {
        title: 'About Us'
    }

    render() {

        const renderPartner ({item}) => {
            return (
                <ListItem>
                title={props.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
                />
            )
        }
        return (
            <ScrollView>
                <Mission />
                <Card
                featuredTitle={"Community Partners"}
                >
                    <FlatList
                    data={this.state.partners}
                    renderItem={renderPartner}
                    keyExtractor={item => item.id.toString()}
                     />
                 </Card>
            </ScrollView>
        );
    }
}

export default About;