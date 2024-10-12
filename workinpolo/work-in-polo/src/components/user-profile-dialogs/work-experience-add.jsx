import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog'
import { Field, Label } from '@/components/fieldset'
import { Textarea } from '@/components/textarea'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { useState } from 'react'


export default function WorkExperienceAddDialog({isWorkExperienceOpen, setIsWorkExperienceOpen, workExperienceInfo, setWorkExperienceInfo}) {

//Use states to store input values
const [poloClubName, setPoloClubName] = useState('');
const [startDate, setStartDate] = useState('');
const [endDate, setEndDate] = useState('');
const [experienceDescription, setExperienceDescription] = useState('');


//Function to add the work experience to the state  
const onSubmit = () => {
    setWorkExperienceInfo([...workExperienceInfo, {
        poloClubName: poloClubName,
        startDate: startDate,
        endDate: endDate,   
        experienceDescription: experienceDescription,
        id: crypto.randomUUID()
    }]);
    setPoloClubName('');
    setStartDate('');
    setEndDate('');
    setExperienceDescription('');
    setIsWorkExperienceOpen(false);
    console.log(workExperienceInfo);
}


    return (
        <Dialog open={isWorkExperienceOpen} onClose={() => setIsWorkExperienceOpen(false)}>
            <DialogTitle>Work Experience</DialogTitle>
            <DialogDescription>
                Edit your Work Experience below
            </DialogDescription>
            <DialogBody>
                <Field>
                    <Label>Polo Club/Organization Name</Label>
                    <Input 
                    name="polo-club-name"
                    value={poloClubName}
                    onChange={(e) => setPoloClubName(e.target.value)}
                    />
                </Field>
                <Field>
                    <Label>Start Date</Label>
                    <Input 
                    type="date" 
                    name="start-date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    />
                </Field>
                <Field>
                    <Label>End Date</Label>
                    <Input 
                    type="date" 
                    name="end-date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    />
                </Field>
                <Field>
                    <Label>Describe Your Experience</Label>
                    <Textarea 
                    className="h-[30vh]" 
                    name="experience-description"
                    value={experienceDescription}
                    onChange={(e) => setExperienceDescription(e.target.value)}
                    />
                </Field>
            </DialogBody>
            <DialogActions>
                <Button plain onClick={() => setIsWorkExperienceOpen(false)}>
                    Cancel
                </Button>
                <Button onClick={onSubmit}>Add</Button>
            </DialogActions>
        </Dialog>
    )
}