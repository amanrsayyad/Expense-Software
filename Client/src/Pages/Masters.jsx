import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import { BgHome, HomeContainer, HomeCard } from "../BaseStyles";
import CreateBtn from '../Components/MasterCompo/CreateBtn';
import CreateMaster from '../Components/CreateMaster';

const Masters = () => {
  const [create, setCreate] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [editable, setEditable] = useState(null);
  return (
    <BgHome>
      <Sidebar>
        <HomeContainer>
          <HomeCard>
            {showBtn == false ? (
              <CreateBtn setCreate={setCreate} setShowBtn={setShowBtn} editable={editable} setEditable={setEditable} />
            ) : null}
            {create == true ? (
              <CreateMaster setCreate={setCreate} setShowBtn={setShowBtn} editable={editable} setEditable={setEditable} />
            ) : null}
          </HomeCard>
        </HomeContainer>
      </Sidebar>
    </BgHome>
  )
}

export default Masters;


