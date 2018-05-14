import React from "react";

class NavigationHexagon extends React.Component {
    state = {
        active: false
    };

    expandNav = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return (
            <div
                id="site-navigation"
                className={
                    this.state.active
                        ? "main-navigation expanded"
                        : "main-navigation"
                }
                role="navigation"
                onClick={this.expandNav}
            >
                <div
                    className={
                        this.state.active
                            ? "menu-hexagon black expanded"
                            : "menu-hexagon black"
                    }
                >
                    <div className="menu-icon-container">
                        <span className="menu-line" id="menu-line-1" />
                        <span className="menu-line" id="menu-line-2" />
                        <span className="menu-line" id="menu-line-3" />
                    </div>
                </div>
                <div
                    className={
                        this.state.active
                            ? "menu-hexagon cyan expanded"
                            : "menu-hexagon cyan"
                    }
                />
                <div
                    className={
                        this.state.active
                            ? "menu-hexagon magenta expanded"
                            : "menu-hexagon magenta"
                    }
                />
            </div>
        );
    }
}

export default NavigationHexagon;
