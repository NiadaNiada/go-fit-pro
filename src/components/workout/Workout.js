import React from 'react';
import SearchBar from './SearchBar';
import youtube from './youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class Workout extends React.Component {

    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('workouts');
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]

        });
    };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div>
                <div className="workout-content">
                    <div className="serch-aria">
                        <h4>WORKOUT</h4>
                        <SearchBar onFormSubmit={this.onTermSubmit} />
                    </div>
                    <div className="workout-details">
                        <div className="ui grid">
                            <div className="ui row">
                                <div className="eleven wide column">
                                    <VideoDetail video={this.state.selectedVideo} />
                                </div>
                                <div className="five wide column">
                                    <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Workout;