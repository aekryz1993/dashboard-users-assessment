import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const sidebarLayout = css`
  position: relative;
  background-color: var(--light-version-neutral, #fff);
  min-height: 100%;
  width: 13.625rem;
  flex-grow: 0;
  flex-shrink: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

export const footerStyle = css`
  position: relative;
  bottom: 0;
  left: 0;
  padding: 1.5rem 1.2rem;
  width: 100%;
`;

export const AvatarImg = styled.div<{ url: string }>`
  border-radius: 2.25rem;
  background: ${(props) => `url(${props.url})`},
    lightgray -12.876px -0.283px / 157.948% 123.256% no-repeat;
  width: 2.8125rem;
  height: 2.6875rem;
  background-size: 100%;
`;

export const subTextStyle = css`
  font-size: 0.7025rem;
  opacity: 0.5;
`;

export const logoutStyle = css`
  opacity: 0.4000000059604645;
`;

export const linksContainerStyle = css`
  font-weight: 500;
  padding: 1rem 0 1rem 1.5rem;
  &:hover {
    background-color: rgb(153, 178, 198, 0.20000000298023224);
  }
  & .link-active {
    background-color: rgb(153, 178, 198, 0.20000000298023224);
    &--icon {
      color: #3A36DB;
    }
    &--label {
      color: var(--light-version-primary, #3A36DB);
    }
  }
  & .link-inactive {
    background-color: transparent;
    &--icon {
      color: var(--light-version-text, #06152B);
    }
    &--label {
      color: var(--light-version-text, #06152B);
    }
  }
`;

export const logoBoxStyle = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`