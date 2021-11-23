import React from 'react';
import {Wrapper} from "../../../common/styles";
import styled from "styled-components";

const Text = styled.div`
  display: flex;
  flex-direction: column;

  p {
    word-break: break-word;
  }
`

const TwitterDescription = () => {
    return (
        <Wrapper justifyContent={'center'}>
            <Text>
                <h4>WHOSE EVENING. SPIRIT SUBDUE TWO DON’T. LIVING, I DIVIDED WAS BE EVERY HAD…</h4>
                <p>
                    Created, likeness bring which in stars herb a is give you’ll it life you’ll.
                    Whose evening. Spirit subdue two don’t.
                    Living, i divided was be every had. Him god.
                    Don’t kind seed lesser heaven bearing waters seas in of earth female lights.
                    Morning fruit may. May gathering moving fruit all them spirit dry place there appear they’re
                    together.
                </p>
                <p>
                    Together had said given day spirit.
                    Land years upon, created winged all.
                    Dry, days for form dry moved gathering meat light whose abundantly fowl said our.
                    Have green. Cattle. Called i that waters dry one said firmament his after their night.
                    Likeness.
                </p>
            </Text>
        </Wrapper>
    );
};

export default TwitterDescription;