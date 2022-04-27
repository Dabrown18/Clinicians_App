export interface Clinician {
  id: string
  firstName: string
  lastName: string
  fullName: string
  imageUrl: string
  bio: string
  email: string
  phone: string
  location: string
}

export interface GetCliniciansResponse {
  data: Clinician[]
}


