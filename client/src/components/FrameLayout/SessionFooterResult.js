import React from "react";
import pluralize from "pluralize";

export default function SessionFooterResult({
    currentTab,
    rawResponse,
    response,
}) {
    const currentAction = currentTab === "graph" ? "Showing" : "Found";

    return (
        <div className="row">
            <div className="col-12">
                <span className="result-message">
                    {currentAction}{" "}
                    <span className="value">{response.nodes.length}</span>{" "}
                    {pluralize("node", response.nodes.length)} and{" "}
                    <span className="value">{response.edges.length}</span>{" "}
                    {pluralize("edge", response.edges.length)}
                </span>
            </div>
        </div>
    );
}