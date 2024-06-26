import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Box, Container, Flex, Text } from '@radix-ui/themes'
import { Button } from 'src/ui/design-system/Button'
import { useNavigate } from 'react-router-dom'
import type { Pet } from 'src/utils/types/pet'
import { routes } from 'src/routes/paths'
import { ImageContainer } from './components/ImageContainer'
import { Attribute } from './components/Attribute'
import mocks from 'src/mocks/pet-detail.json'

const PetDetails = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(`${routes.public.home}`)
  const { id: petId } = useParams<{ id: string }>()
  const [pet, _] = useState<Pet>(mocks as Pet)

  return (
    <>
      <Container
        size="4"
        m={{
          initial: '0',
          sm: '4',
        }}
      >
        <Flex
          direction={{
            initial: 'column',
            sm: 'row',
          }}
          align="start"
          className="h-full"
          gap="4"
        >
          <Button onClick={goBack}>Go back</Button>
          <Flex
            align="start"
            className="h-full"
            gap="4"
            direction={{
              initial: 'column',
              sm: 'row',
            }}
          >
            <ImageContainer src={pet.image} alt={pet.name} />
            <Box className="bg-white p-8 rounded-lg">
              <Flex direction="column" gap="2">
                <Text size="8" mb="2">
                  {' '}
                  {pet.name}
                </Text>
                <Attribute label="age" value={pet.age} />
                <Attribute label="sex" value={pet.sex} />
                <Attribute label="size" value={pet.size} />
                <Attribute label="weight" value={pet.weight} />
                <Attribute label="neutered" value={pet.neutered} />
                <Attribute label="vaccinated" value={pet.vaccinated} />
                <Attribute label="temperament" value={pet.temperament} />
                <Attribute label="availability" value={pet.availability} />
                <Attribute label="Breed" value={pet.breed} />
                <Attribute label="location" value={pet.location} />
                <Attribute label="Shelter" value={pet.rescueOrganization} />
                <Attribute label="contact Information" value={pet.contactInformation} />
                <Attribute label="medical History" value={pet.medicalHistory} />
                <Link
                  to={{
                    pathname: `/${routes.public.adoptionProcess.adoptionForm}/${petId}`,
                  }}
                >
                  <Button>Start Adoption process</Button>
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </>
  )
}

export { PetDetails }
