import { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ID from "./Id";
import Cart from "./Dropdowns/Cart";
var columnsPerRow = 4;
class IdCards extends Component {
  render() {
    return (
      <div>

        <div className="gap-0 row-gap-3">
          <Row xs={1} md={columnsPerRow} className="pt-2">
            {this.state.ids.map((i) => {
              return (
                <Col>
                  <ID
                    key={i.id}
                    id={i.id}
                    first_name={i.first_name}
                    last_name={i.last_name}
                    email={i.email}
                    photo={i.photo}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }

  state = {
    ids: [
      {
        id: 1,
        first_name: "Lana",
        last_name: "Hadwick",
        email: "lhadwick0@weibo.com",
        gender: "Female",
        photo: "https://picsum.photos/id/15/2500/1667",
      },
      {
        id: 2,
        first_name: "Allistir",
        last_name: "McMurdo",
        email: "amcmurdo1@engadget.com",
        gender: "Male",
        photo: "https://picsum.photos/id/16/2500/1667",
      },
      {
        id: 3,
        first_name: "Marylee",
        last_name: "Pymer",
        email: "mpymer2@deliciousdays.com",
        gender: "Female",
        photo: "https://picsum.photos/id/14/2500/1667",
      },
      {
        id: 4,
        first_name: "Elwira",
        last_name: "Camois",
        email: "ecamois3@hhs.gov",
        gender: "Female",
        photo: "https://picsum.photos/id/13/2500/1667",
      },
      {
        id: 5,
        first_name: "Zebulen",
        last_name: "Bockings",
        email: "zbockings4@mashable.com",
        gender: "Male",
        photo: "https://picsum.photos/id/12/2500/1667",
      },
      {
        id: 6,
        first_name: "Blair",
        last_name: "Oliver",
        email: "boliver5@walmart.com",
        gender: "Female",
        photo: "https://picsum.photos/id/11/2500/1667",
      },
      {
        id: 7,
        first_name: "Charmine",
        last_name: "Nevinson",
        email: "cnevinson6@vimeo.com",
        gender: "Female",
        photo: "https://picsum.photos/id/10/2500/1667",
      },
      {
        id: 8,
        first_name: "Nariko",
        last_name: "Losemann",
        email: "nlosemann7@homestead.com",
        gender: "Female",
        photo: "https://picsum.photos/id/9/2500/1667",
      },
      {
        id: 9,
        first_name: "Farrell",
        last_name: "Bondley",
        email: "fbondley8@aboutads.info",
        gender: "Male",
        photo: "https://picsum.photos/id/8/2500/1667",
      },
      //   {
      //     id: 10,
      //     first_name: "Aaren",
      //     last_name: "Celle",
      //     email: "acelle9@archive.org",
      //     gender: "Female",
      //     photo: "PO Box 40211"
      //   }, {
      //     id: 11,
      //     first_name: "Sharline",
      //     last_name: "Martinuzzi",
      //     email: "smartinuzzia@google.com.au",
      //     gender: "Female",
      //     photo: "PO Box 20441"
      //   }, {
      //     id: 12,
      //     first_name: "Thorndike",
      //     last_name: "Lomb",
      //     email: "tlombb@economist.com",
      //     gender: "Male",
      //     photo: "Room 1927"
      //   }, {
      //     id: 13,
      //     first_name: "Neron",
      //     last_name: "Quarrie",
      //     email: "nquarriec@homestead.com",
      //     gender: "Male",
      //     photo: "Apt 1932"
      //   }, {
      //     id: 14,
      //     first_name: "Jessamyn",
      //     last_name: "Meo",
      //     email: "jmeod@themeforest.net",
      //     gender: "Female",
      //     photo: "Suite 44"
      //   }, {
      //     id: 15,
      //     first_name: "Revkah",
      //     last_name: "Effaunt",
      //     email: "reffaunte@noaa.gov",
      //     gender: "Female",
      //     photo: "PO Box 36640"
      //   }, {
      //     id: 16,
      //     first_name: "Penelope",
      //     last_name: "Caught",
      //     email: "pcaughtf@behance.net",
      //     gender: "Genderqueer",
      //     photo: "Room 455"
      //   }, {
      //     id: 17,
      //     first_name: "Gweneth",
      //     last_name: "MacFarlane",
      //     email: "gmacfarlaneg@google.com.au",
      //     gender: "Genderfluid",
      //     photo: "13th Floor"
      //   }, {
      //     id: 18,
      //     first_name: "Barnebas",
      //     last_name: "Mallen",
      //     email: "bmallenh@artisteer.com",
      //     gender: "Male",
      //     photo: "Apt 6"
      //   }, {
      //     id: 19,
      //     first_name: "Wat",
      //     last_name: "Brilon",
      //     email: "wbriloni@soundcloud.com",
      //     gender: "Male",
      //     photo: "Apt 1844"
      //   }, {
      //     id: 20,
      //     first_name: "Johnette",
      //     last_name: "Smoth",
      //     email: "jsmothj@hhs.gov",
      //     gender: "Female",
      //     photo: "Suite 72"
      //   }
    ],
  };
}

export default IdCards;
