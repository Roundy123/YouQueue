import React from "react";
import { Container, Row, Col } from "reactstrap";

export const ListResults = ({ searchResults, handleAddToQueue }) => {
  const mappedResults = searchResults.map((result, index) => (
    <Row key={index} className="mb-2" onClick={() => handleAddToQueue(result)}>
      <Col className="border" xs="3">
        <img
          src={result.snippet.thumbnails.default.url}
          alt="video thumbnail"
        />
      </Col>
      <Col className="border" xs="9">
        {result.snippet.title}
      </Col>
    </Row>
  ));

  return <Container>{mappedResults}</Container>;
};
