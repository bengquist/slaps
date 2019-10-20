import { GET_ME } from '../auth/query';
import Link from 'next/link';
import React from 'react'
import colors from '../style/colors';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

function Sidebar() {
  const user = useQuery(GET_ME);

  return (
    <Container>
      <Section>
        <Link href="/feed">
          <Button>
            Feed
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button>
          Dashboard
          </Button>
        </Link>
        <Link href="/stats">
          <Button>
          Stats
          </Button>
        </Link>
      </Section>
      <Section>
        <Link href="/profile">
          <Button>
            {user.data && user.data.me && <Image src={user.data.me.image} alt=""/>}
          </Button>
        </Link>
      </Section>
    </Container>
  )
}

export default Sidebar

const Container = styled.aside`
  max-width: 20%;
  display: flex;
  flex-direction: column;
  border-radius: .25rem;
  overflow: hidden;
`

const Section = styled.div`
  border-bottom: 1px solid ${colors.lightGray};
`

const Button = styled.button`
  width: 100%;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 600;
  padding: .5rem 2rem;
  background: ${colors.darkGray};
  color: ${colors.white};

  transition: .2s;

  :hover {
    color: ${colors.orange};
    opacity: 0.90;
  }
  :focus {
    color: ${colors.orange};
  }
`

const Image = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  object-fit: cover;
`