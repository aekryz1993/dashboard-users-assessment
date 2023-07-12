import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const AvatarImg = styled.div<{ url: string }>`
  border-radius: 2.25rem;
  background: ${(props) => `url(${props.url})`},
    lightgray -2.937px -0.531px / 100% 150% no-repeat;
  width: 2.25rem;
  height: 1.96738rem;
  background-size: 100%;
`;

export const boxStyle = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & span {
    color: var(--light-version-text, #06152b);
    font-size: 0.88875rem;
  }
`;

export const StatusBox = styled.div<{ bgColor: string; color: string }>`
  width: 10.125rem;
  height: 2.45925rem;
  border-radius: 1.40625rem;
  background: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    color: ${(props) => props.color};
    opacity: 1;
    z-index: 10;
  }
`;

export const MenuOptionBox = styled.div<{ bgColor: string; color: string }>`
  width: 10.125rem;
  height: 2.45925rem;
  border-radius: 1.40625rem;
  background: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & .MuiSvgIcon-root {
    color: ${(props) => props.color};
  }

  & span {
    color: ${(props) => props.color};
  }
`;
