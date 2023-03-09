import ProfileCard from "../ProfileCard";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useAuthValue } from "../AuthContext";
import { auth } from '../firebase'
import { signOut } from "firebase/auth";

function Profile() {
  const { currentUser } = useAuthValue();
  return (
    <body>
      <div className="container">
        <div>
          <button type="button" className="btn signOutBtn text-right" onClick={() => signOut(auth)}>Sign out</button>
        </div>
        <div className="row-gap-3 profileCardRow g-2">
          <Row xs={1} md={2}>
            <Col>
              <ProfileCard title={"Name"} value={"Abc Def"} />
            </Col>
            <Col>
              <ProfileCard title={"Email"} value={currentUser?.email} />
            </Col>
            <Col>
              <ProfileCard title={"Date of birth"} value={"01/01/2000"} />
            </Col>
            <Col>
              <ProfileCard title={"Name"} value={"Abc"} />
            </Col>
          </Row>
        </div>
      </div>
      <div class="container"></div>
    </body>
  );
}

export default Profile;
