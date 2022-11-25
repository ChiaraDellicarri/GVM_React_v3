import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

class AutoComplete extends Component {
    constructor(props) {
        super(props);
        this.clearSearchBox = this.clearSearchBox.bind(this);
    }

    componentDidMount({ map, mapApi } = this.props) {
        const options = {
            componentRestrictions: { country: 'it' }
        };
        this.autoComplete = new mapApi.places.Autocomplete(
            this.searchInput,
            options,
        );
        this.autoComplete.addListener('place_changed', this.onPlaceChanged);
        this.autoComplete.bindTo('bounds', map);
        /*        this.autoComplete.setTipes(['address']);*/
        this.handleKeyDown(this.searchInput);
    }

    componentWillUnmount({ mapApi } = this.props) {
        mapApi.event.clearInstanceListeners(this.searchInput);
    }

    onPlaceChanged = ({ map, addplace } = this.props) => {
        const place = this.autoComplete.getPlace();

        if (!place.geometry) return;
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
            map.setZoom(9);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(9);
        }

        addplace(place);
        this.searchInput.blur();
    };

    clearSearchBox() {
        this.searchInput.value = '';
    }

    handleKeyDown = (input) => {
        /* Store original event listener */
        const _addEventListener = input.addEventListener;

        const addEventListenerWrapper = (type, listener) => {
            if (type === 'keydown') {
                /* Store existing listener function */
                const _listener = listener
                listener = (event) => {
                    /* Simulate a 'down arrow' keypress if no address has been selected */
                    const suggestionSelected = document.getElementsByClassName('pac-item-selected').length
                    if (event.key === 'Enter' && !suggestionSelected) {
                        const arrowDown = new KeyboardEvent('keydown');
                        Object.defineProperty(arrowDown, 'keyCode', {
                            get: () => 40
                        });
                        _listener.apply(input, [arrowDown])
                    }
                    _listener.apply(input, [event]);
                }
            }
            _addEventListener.apply(input, [type, listener])
        }
        input.addEventListener = addEventListenerWrapper
    }



    render() {
        return (

            <input id="location-input"
                ref={(ref) => {
                    this.searchInput = ref;
                }}
                type="text"
                className="bg-transparent w-full mx-2 focus:outline-none pac-target-input"
                onFocus={this.clearSearchBox}
                /* placeholder="Inserisci l'indirizzo o la citt&agrave;"*/
                placeholder="Inserisci l'indirizzo o la città"
                onKeyDown={this.handleKeyDown}
            />

        );
    }
}

export default AutoComplete;