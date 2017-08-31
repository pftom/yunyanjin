import React, { Component } from 'react';


import './css/Events.css';

import Timeline from './TimeLine';
require('react-image-timeline/dist/timeline.css');

const events = [{
	"date": Date.parse("2013-05-15T07:00:00.000Z"),
	"text": "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem. Phasellus tincidunt rhoncus magna,\neget elementum odio rutrum fermentum. Ut a justo lacus. Maecenas blandit molestie felis ac viverra. Pellentesque\nsagittis ligula neque, sit amet feugiat massa tempor sed. Duis id bibendum ex, pulvinar tincidunt ",
	"title": "Berlin, Germany",
	"imageUrl": "https://s3.amazonaws.com/aaron-cdn/react-image-timeline/berlin.jpg"
}, {
	"date": Date.parse("2013-08-14T07:00:00.000Z"),
	"text": "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem. Phasellus tincidunt rhoncus magna,\neget elementum odio rutrum fermentum. Ut a justo lacus. Maecenas blandit molestie felis ac viverra. Pellentesque\nsagittis ligula neque, sit amet feugiat massa tempor sed. Duis id bibendum ex, pulvinar tincidunt orci. Curabitur\nid sem urna. Maecenas sed elit malesuada, cursus ligula ut, vestibulum lorem. Suspendisse vitae ultrices libero.\nMauris maximus, ligula vitae tincidunt scelerisque, ipsum magna euismod massa, eu vulputate enim est tempus sem.\nMaecenas id nibh vitae ante volutpat facilisis nec eget velit. Proin et ligula feugiat, auctor tellus sit amet,\naccumsan neque. Quisque porttitor lectus quis elit fermentum, a facilisis est suscipit. Integer consectetur dapibus\nnisi, ut lacinia enim vulputate vitae. Curabitur id diam mauris. Duis dictum, dolor at porttitor aliquet, justo libero\nmattis magna, eu pellentesque augue mauris eget erat. Pellentesque lacinia velit nec ullamcorper mollis. Pellentesque\nlacus tortor, m",
	"title": "Chicago, Illinois",
	"imageUrl": "https://s3.amazonaws.com/aaron-cdn/react-image-timeline/chicago.jpg"
}, {
	"date": Date.parse("2013-09-27T07:00:00.000Z"),
	"text": "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem. Phasellus tincidunt rhoncus magna,\neget elementum odio rutrum fermentum. Ut a justo lacus. Maecenas blandit molestie felis ac viverra. Pellentesque\nsagittis ligula neque, sit amet feugiat massa tempor sed. Duis id bibendum ex, pulvinar tincidunt orci. Curabitur\nid sem urna. Maecenas sed elit malesuada, cursus ligula ut, vestibulum lorem. Suspendisse vitae ultric",
	"title": "Cairo, Egypt",
	"imageUrl": "https://s3.amazonaws.com/aaron-cdn/react-image-timeline/egypt.jpg"
}, {
	"date": Date.parse("2013-12-10T08:00:00.000Z"),
	"text": "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem. Phasellus tincidunt rhoncus magna,\neget elementum odio rutrum fermentum. Ut a justo lacus. Maecenas blandit molestie felis ac viverra. Pellentesque\nsagittis ligula neque, sit amet feugiat massa tempor sed. Duis id bibendum ex, pulvinar tincidunt orci. Curabitur\nid sem urna. Maecenas sed elit malesuada, cursus ligula ut, vestibulum lorem. Suspendisse vitae ultrices libero.\nMauris maximus, ligula vitae tincidunt scelerisque, ipsum magna euismod massa, eu vulputate enim est tempus sem.\nMaecenas id nibh vitae ante volutpat facilisis nec eget velit. Proin et ligula feugiat, auctor tellus sit amet,\naccumsan neque. Quisque porttitor lectus quis elit fermentum, a facilisis est suscipit. Integer consectetur dapibus\nnisi, ut lacinia enim vulputate vitae. Curabitur id diam mauris. Duis dictum, dolor at porttitor aliquet, justo libero\nmattis magna, eu pellentesque augue mau",
	"title": "London, England",
	"imageUrl": "https://s3.amazonaws.com/aaron-cdn/react-image-timeline/london.jpg"
}, {
	"date": Date.parse("2014-01-12T08:00:00.000Z"),
	"text": "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem. Phasellus tincidunt rhoncus magna,\neget elementum odio rutrum fermentum. Ut a justo lacus. Maecenas blandit molestie felis ac viverra. Pellentesque\nsagittis ligula neque, sit amet feugiat massa tempor sed. Duis id bibendum ex, pulvinar tincidunt orci. Curabitur\nid sem urna. Maecenas sed elit malesuada, cursus ligula ut, vestibulum lorem. Suspendisse vitae ultrices libero.\nMauris maximus, ligula vitae tincidunt scelerisque, ipsum magna euismod massa, eu vulputate enim est tempus sem.\nMaecenas id nibh vitae ante volutpat facilisis nec eget velit. Proin et ligula feugiat, auctor tellus sit amet,\naccumsan neque. Quisque porttitor lectus quis elit fermentum, a facilisis est suscipit. Integer consectetur dapibus\nnisi, ut lacinia enim vulputate vitae. Curabitur id diam mauris. Duis dictum, dolor at porttitor aliquet, justo libero\nmattis magna, eu pellentesque augue mauris eget erat. Pellentesque lacinia velit nec ullamcorper mollis. Pellentesque\nlacus tortor, maximus eget tincidunt non, luctus scelerisque odio. Suspendisse potent",
	"title": "New York, New York",
	"imageUrl": "https://s3.amazonaws.com/aaron-cdn/react-image-timeline/ny.jpg"
}];

class Events extends Component {
    render() {
        return (
            <div className="event-box " id="events">
                <h3 className="sector-title text-center">扶贫纪实</h3>
                <div className="row slideanim">
                    <Timeline events={events} />
                </div>
            </div>
        )
    }
}

export default Events;