import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog'
import { Field, Label } from '@/components/fieldset'
import { Textarea } from '@/components/textarea'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { useState, useEffect } from 'react'


export default function WorkExperienceAddDialog({
    isWorkExperienceOpen,
    setIsWorkExperienceOpen,
    workExperienceInfo,
    setWorkExperienceInfo,
    selectedExperience = null
}) {

//Use states to store input values
const [poloClubName, setPoloClubName] = useState('');
const [startDate, setStartDate] = useState('');
const [endDate, setEndDate] = useState('');
const [experienceDescription, setExperienceDescription] = useState('');


//Edit or add?
const isEditMode = selectedExperience !== null;


//Function that deletes the selected experience
const handleDeleteExperience = () => {
    setWorkExperienceInfo(workExperienceInfo.filter((exp) => exp.id !== selectedExperience.id));
    setIsWorkExperienceOpen(false);
}

useEffect(() => {
    if (isEditMode) {
        setPoloClubName(selectedExperience.poloClubName);
        setStartDate(selectedExperience.startDate);
        setEndDate(selectedExperience.endDate);
        setExperienceDescription(selectedExperience.experienceDescription);
    }
    else {
        setPoloClubName('');
        setStartDate('');
        setEndDate('');
        setExperienceDescription('');
    }
}, [isEditMode, selectedExperience]);

//Function to add the work experience to the state or edit a selected experience
const onSubmit = () => {
    if (isEditMode) {
        //Edit
        setWorkExperienceInfo((prevExperiences) =>
            prevExperiences.map((exp) =>
                exp.id === selectedExperience.id
                    ? { ...exp, poloClubName, startDate, endDate, experienceDescription }
                    : exp
            )
        );
    } else {
        //Add
        setWorkExperienceInfo([...workExperienceInfo, {
            poloClubName: poloClubName,
            startDate: startDate,
            endDate: endDate,   
            experienceDescription: experienceDescription,
            id: crypto.randomUUID()
        }]);
    }
    setIsWorkExperienceOpen(false);

   
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
                {isEditMode && (
                    <Button plain onClick={handleDeleteExperience}>
                        Delete Experience
                    </Button>
                )}
                <Button plain onClick={() => setIsWorkExperienceOpen(false)}>
                    Cancel
                </Button>
                <Button onClick={onSubmit}>{isEditMode ? 'Save Changes' : 'Add Experience'}</Button>
            </DialogActions>
        </Dialog>
    )
}