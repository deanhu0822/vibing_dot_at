export default {
    state: {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        zoom: 15,
        center: [30.607828, -98.401769],
        bounds: '',
        markers: [],
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    },
    actions: {
        updateValue({ commit }, payload) {
            commit('updateValue', payload);
        },
    },
    mutations: {
        updateZoom(state, zoom) {
            state.zoom = zoom;
        },
        updateCenter(state, center) {
            state.center = center;
        },
        updateBounds(state, bounds) {
            state.bounds = bounds;
        },
        addMarker(state, marker) {
            state.markers.push(marker);
        },
        clearMarkers(state) {
            state.markers = [];
        }
    },
    getters: {
        // eslint-disable-next-line 
        viewbox: state => {
            /* LocationIQ requires a viewbox to narrow search results, which 
             we compute from the map's bounds.
            */
           // eslint-disable-next-line 
            return state.bounds._northEast.lng + ',' +
                state.bounds._northEast.lat + ',' +
                state.bounds._southWest.lng + ',' +
                state.bounds._southWest.lat;
        }
    }

};