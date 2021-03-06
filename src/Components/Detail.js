import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db, { collection, getDocs } from "../firebase";
import { doc} from "firebase/firestore";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  //9hupfAeSaC8fW7TLhD22

  useEffect(() => {
    async function getCities(db) {
      const citiesCol = collection(db, "movies");
      const citySnapshot = await getDocs(citiesCol);
      citySnapshot.docs.map((doc) => {
        if (id === doc.id) {
          setDetail(doc.data());
          return { id: doc.id, ...doc.data() };
        }
      });
    }

    getCities(db);
  }, [id]);

  console.log(detail);
  
  return (
    <Container>
      <Background>
        <img
          src={detail && detail.backgroundImg}
          alt={detail && detail.subTitle}
        />
      </Background>
      <ImageTitle>
        <img src={detail && detail.titleImg} alt={detail && detail.subTitle} />
      </ImageTitle>
      <ContentMeta>
        <Control>
          <Player>
            <img src="/images/play-icon-black.png" alt="play" />
            <span>Play</span>
          </Player>
          <Traitler>
            <img src="/images/play-icon-white.png" alt="play" />
            <span>Trailer</span>
          </Traitler>
          <AddList>
            <span>+</span>
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="group" />
            </div>
          </GroupWatch>
        </Control>
        <SubTitle>{detail && detail.subTitle}</SubTitle>
        <Description>{detail && detail.description}</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw - 5px);
`;
const Background = styled.div`
  left: 0;
  opacity: 0.8;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;
const ContentMeta = styled.div`
  max-width: 874px;
`;
const Control = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;
const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: cetner;
  letter-spacing: 1.9px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 22ex;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;
const Traitler = styled(Player)`
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
`;
const AddList = styled.div`
  margin-right: 15px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: cetner;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid #fff;
  cursor: pointer;
  span {
    display: inline-block;
    font-size: 36px;
    color: #fff;
    font-weight: 700;
  }
`;
const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
  }
  img {
    width: 100%;
  }
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 758px) {
    font-szie: 12px;
  }
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
`;

export default Detail;
