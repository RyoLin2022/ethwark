/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/ark1.jpg"),
    altText: "The Ark",
    caption: "The Ark-SR"
  },
  {
    src: require("assets/img/ark2.jpg"),
    altText: "The Ark",
    caption: "The Ark-SR"
  },
  {
    src: require("assets/img/ark3.jpg"),
    altText: "The Ark",
    caption: "The Ark-SSR"
  },
  {
    src: require("assets/img/ark4.jpg"),
    altText: "The Ark",
    caption: "The Ark-SSR"
  }
];

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section pt-o" id="carousel">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="6">
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="4">
              <h2>Story</h2>
              <br />
              <b>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Noah's Ark (Hebrew: תיבת נח; Biblical Hebrew: Tevat Noaḥ)[Notes 1]
                  is the vessel in the Genesis flood narrative (Genesis chapters 6–9)
                  through which God spares Noah, his family, and examples of all the
                  world's animals from a world-engulfing flood.
                </span>
                <br />
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  This NFT is inspired by the Noah's Ark, just like the survivors from the flood.
                  ETHW carries those POW believers to the wonderland.
                </span>
              </b>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
