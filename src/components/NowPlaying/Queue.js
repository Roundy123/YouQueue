import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

export const Queue = ({ searchResults, handleDeleteFromQueue }) => {
  const mappedResults = searchResults.map((result, index) => (
    <Row key={index} className="mb-2">
      <Col className="border" xs="3">
        <img
          src={result.snippet.thumbnails.default.url}
          alt="video thumbnail"
        />
      </Col>
      <Col className="border" xs="5">
        {result.snippet.title}
      </Col>
      <Col>
        <Button
          color="danger"
          xs="4"
          className="delete-button"
          onClick={() => handleDeleteFromQueue(result)}
        >
          Delete
        </Button>
      </Col>
    </Row>
  ));

  mappedResults.shift(); // Don't want to show currently playing video in queue

  return <Container>{mappedResults}</Container>;
};
