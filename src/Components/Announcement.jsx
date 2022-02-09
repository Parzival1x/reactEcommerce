import styled from "styled-components";

const Container = styled.div `
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: bolder;
    justify-content: center;
`

const Announcement = () => {
    return (
    <Container>
        Super Deal available just for today!
    </Container>
    );
}
  export default Announcement