import React, { Component } from "react";
import axios from "axios";
import "./news.css"


class NewsAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c3307c06067042afb158a931318cb436")
            .then(res => res.json())
            .then(
                (result) => {

                    this.setState({
                        isLoaded: true,
                        items: result
                    });

                    console.log("News");
                    console.log(this.state.items);
                    // console.log("Crypto");

                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        const datas = this.state.items;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (

                <div className="widget4">
                    <div className="titre">
                        <h2><p>Flash info :</p></h2>
                        <br/>
                    </div>
                    <div className="contenue">
                        <h2><p className="description">{datas.articles[2].description}</p></h2>
                    </div>
                    <div className="source">
                    <br/>
                       <h3> <p>Source: {datas.articles[2].source.name}</p></h3>
                       
                    </div>

                </div>



            );
        }
    }
}

export default NewsAPI;