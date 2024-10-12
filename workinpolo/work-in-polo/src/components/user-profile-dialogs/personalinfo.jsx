import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog'
import { Field, Label } from '@/components/fieldset'
import { Textarea } from '@/components/textarea'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { useState } from 'react'

export default function PersonalInfo({isPersonalInformationOpen, setIsPersonalInformationOpen, personalInformationInfo, setPersonalInformationInfo}) {
    
    //Form fields states
    const [name, setName] = useState("Arturo");
    const [surname, setSurname] = useState("Armando");
    const [role, setRole] = useState("Professional Player");
    const [country, setCountry] = useState("");
    const [basedIn, setBasedIn] = useState("");
    const [homePoloClubs, setHomePoloClubs] = useState("");
    
    //Function to pass the information to the profile on submit

    const handleSubmit = (e) => {
        e.preventDefault();

        setPersonalInformationInfo({
            name: name, 
            surname: surname, 
            role: role, 
            country: country, 
            basedIn: basedIn, 
            homePoloClubs: homePoloClubs
        }
        );
        setIsPersonalInformationOpen(false);
    }
    
    return (
        <Dialog open={isPersonalInformationOpen} onClose={() => setIsPersonalInformationOpen(false)}>
            <DialogTitle>Personal Information</DialogTitle>
            <DialogDescription>
                Edit your Personal Information below
            </DialogDescription>
            <DialogBody>
                <Field>
                    <Label>Name</Label>
                    <Input name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </Field>
                <Field>
                    <Label>Surname</Label>
                    <Input name="surname" value={surname} onChange={(e) => setSurname(e.target.value)}/>
                </Field>
                <Field>
                    <Label>Your Role</Label>
                    <Select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="Professional Player">Professional Player</option>
                        <option value="Groom">Groom</option>
                    </Select>
                </Field>
                <Field>
                    <Label>Where are you from?</Label>
                    <Input name="country" value={country} onChange={(e) => setCountry(e.target.value)} />
                </Field>
                <Field>
                    <Label>Where do you currently live?</Label>
                    <Input name="based-in" value={basedIn} onChange={(e) => setBasedIn(e.target.value)} />
                </Field>
                <Field>
                    <Label>What is or what are your home polo clubs?</Label>
                    <Input name="home-polo-club" value={homePoloClubs} onChange={(e) => setHomePoloClubs(e.target.value)} />
                </Field>
            </DialogBody>
            <DialogActions>
                <Button plain onClick={() => setIsPersonalInformationOpen(false)}>
                    Cancel
                </Button>
                <Button onClick={handleSubmit}>Edit</Button>
            </DialogActions>
        </Dialog>
    )
}