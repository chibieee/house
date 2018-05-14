import React from "react";

class ExploreInFilters extends React.Component {
    render() {
        return (
            <aside className="house-filters">
                <div className="filters-accordion">
                    <p className="filters-title">
                        [Curate<span> Posts</span>]
                    </p>
                    <ul className="filters-list">
                        <li className="filter-periods">.</li>
                        <li className="filter-periods">.</li>
                        <li className="filter-periods">.</li>
                        <li className="filter-periods">.</li>
                        <li className="filter-list-item" data-label="look">
                            <div className="filter-img-container">
                                <div className="hexagon-border" />
                                <div className="filter-icon look" />
                            </div>
                            <p>Look.In</p>
                        </li>
                        <li className="filter-periods">.</li>
                        <li className="filter-periods">.</li>
                        <li className="filter-periods">.</li>
                        <li className="filter-periods">.</li>
                        <li className="filter-list-item" data-label="listen">
                            <div className="filter-img-container">
                                <div className="hexagon-border" />
                                <div className="filter-icon listen" />
                            </div>
                            <p>Listen.In</p>
                        </li>
                        <li className="filter-periods">.</li>
                        <li className="filter-periods">.</li>
                        <li className="filter-periods">.</li>
                        <li className="filter-periods">.</li>
                        <li className="filter-list-item" data-label="post">
                            <div className="filter-img-container">
                                <div className="hexagon-border" />
                                <div className="filter-icon dig" />
                            </div>
                            <p>Dig.In</p>
                        </li>
                        <li className="filter-periods">.</li>
                        <li className="filter-periods">.</li>
                        <li className="filter-periods">.</li>
                        <li className="filter-periods">.</li>
                        <li
                            className="filter-list-item active"
                            data-label="all"
                        >
                            <div className="filter-img-container">
                                <div className="hexagon-border" />
                                <div className="filter-icon see" />
                            </div>
                            <p>See.All</p>
                        </li>
                        <li className="filter-periods">.</li>
                        <li className="filter-periods">.</li>
                        <li className="filter-periods">.</li>
                        <li className="filter-periods">.</li>
                        <li className="filter-list-item" data-label="all">
                            <div className="filter-img-container">
                                <div className="hexagon-border" />
                                <div className="filter-icon feed" />
                            </div>
                            <p>My.Feed</p>
                        </li>
                    </ul>
                    <div className="filters-icon-container">
                        <div className="filters-icon" />
                    </div>
                </div>
            </aside>
        );
    }
}

export default ExploreInFilters;
