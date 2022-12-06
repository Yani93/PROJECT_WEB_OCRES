import "./Main.css";
import Meteo from"../meteo/Meteo.js"
import Wallstreet from"../wallstreet/Wallstreet.js"
import Graph from"../graph/Graph.js"






function Main() {
    return (
        <main>
            <div className="main_container">

                <div className="main__title">
                 
                    <div className="main__greeting">
                        <h1>Voyez le monde comme vous ne l'avez jamais vu  </h1>

                    </div>
                </div>

                <div className="main__cards">


                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner"></div>
                        

                    </div>

                    <div className="card">
                        <i className="fa fa-calendar fa-2x text-red"></i>
                        <div className="card_inner"></div>
                        
                        
                    </div>
                    <div className="card">
                        <i className="fa fa-video-camera fa-2x text-yellow"></i>
                        <div className="card_inner"> </div>
                        <Wallstreet />
                    </div>
                    <div className="card">
                        <i className="fa fa-thumbs-up fa-2x text-green"></i>
                        <div className="card_inner"></div>
                        <Meteo />
                    </div>
                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Evolution du coronavirus dans le monde en 2022</h1>
                            
                            </div>
                            <i className="fa fa-usd"></i> </div>
                            <Graph/>
                        
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Record du monde</h1>
                                <p>Guiness book</p>
                            </div>
                            <i className="fa fa-use"></i>
                        </div>

                        <div className="charts__right--cards">
                            <div className="card1">
                                <h1>Hommme le plus grand du monde</h1>
                                <br/>
                                <h1>2.72 m</h1>
                            </div>

                            <div className="card2">
                                <h1>Homme le plus rapide du monde </h1>
                                <br/>
                                <h1>9.58s/100 m</h1>
                            </div>

                            <div className="card3">
                                <h1> Ville la plus riche du monde</h1>
                                <h1>New-York</h1>
                            </div>

                            <div className="card4">
                                <h1>Ville la plus pauvre du monde</h1>
                                <h1>Burundi</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;