import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, Modal, StyleSheet,Button } from 'react-native';
import { Card, Icon, Rating, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite,postComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => ({
    postFavorite: (dishId) => dispatch(postFavorite(dishId)),
    postComment: (dishId,rating,author,comment) => dispatch(postComment(dishId,rating,author,comment))
})

function RenderComments(props) {

    const comments = props.comments;

    const renderCommentItem = ({ item, index }) => {

        return (
            <View key={index} style={{ margin: 10 }}>
                <Text style={{ fontSize: 14 }}>{item.comment}</Text>
                <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
                <Text style={{ fontSize: 12 }}>{'-- ' + item.author + ', ' + item.date} </Text>
            </View>
        );
    };

    return (
        <Card title='Comments' >
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}

function RenderDish(props) {

    const dish = props.dish;

    if (dish != null) {
        return (
            <Card
                featuredTitle={dish.name}
                image={{ uri: baseUrl + dish.image }}>
                <Text style={{ margin: 10 }}>
                    {dish.description}
                </Text>
                <View style={styles.formRow}>
                    <Icon
                        raised
                        reverse
                        name={props.favorite ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='#f50'
                        onPress={() => props.favorite ? console.log('Already favorite') : props.onPress()}
                    />
                    <Icon
                        raised
                        reverse
                        name={'pencil'}
                        type='font-awesome'
                        color="#512DA8"
                        onPress={() => props.onComment()}
                    />
                </View>
            </Card>
        );
    }
    else {
        return (<View></View>);
    }
}


class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 3,
            author: '',
            comment_text: '',
            showModal: false
        };
    }

    static navigationOptions = {
        title: 'Dish Details'
    };

    markFavorite(dishId) {
        this.props.postFavorite(dishId);
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }
   
   

    handleComment(dishId) {
        console.log(JSON.stringify(this.state));
        this.props.postComment(dishId,this.state.rating,this.state.author,this.state.comment_text)
        this.resetComment()
        this.toggleModal()
    }

    resetComment() {
        this.setState({
            rating: 3,
            author: '',
            comment_text: '',
            showModal: false
        });
    }


    render() {
        const dishId = this.props.navigation.getParam('dishId', '');
        return (
            <ScrollView>
                <RenderDish dish={this.props.dishes.dishes[+dishId]}
                    favorite={this.props.favorites.some(el => el === dishId)}
                    onPress={() => this.markFavorite(dishId)}
                    onComment={() => this.toggleModal()}
                />
                <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId === dishId)} />

                <Modal animationType={"slide"} transparent={false}
                    visible={this.state.showModal}
                    onDismiss={() => this.toggleModal()}
                    onRequestClose={() => this.toggleModal()}>
                    <ScrollView>
                        <View style={styles.formRow}>
                            <Rating  defaultRating={3}  showRating  type="star"    fractions={0}     
                                onFinishRating={(itemValue) => this.setState({ rating: itemValue })}

                            />
                        </View>
                        <View style={styles.formRow}>
                            <Input
                                placeholder='Author'
                                leftIcon={{ type: 'font-awesome', name: 'user' }}
                                onChangeText={(itemValue) => this.setState({ author: itemValue })}
                            />
                        </View>
                        <View style={styles.formRow}>
                            <Input
                                placeholder='Comment'
                                leftIcon={{ type: 'font-awesome', name: 'comment' }}
                                onChangeText={(itemValue) => this.setState({ comment_text: itemValue })}
                            />
                        </View>
                        <View style={styles.formRow}>
                            <Button
                                onPress={() => this.handleComment(dishId)}
                                title="SUBMIT"
                                color="#512DA8"
                            />
                        </View>
                        <View style={styles.formRow}>
                            <Button
                                onPress={() => this.resetComment()}
                                title="CANCEL"
                                color="#C0C0C0"
                            />
                        </View>
                    </ScrollView>
                </Modal>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#512DA8',
        textAlign: 'center',
        color: 'white',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Dishdetail);