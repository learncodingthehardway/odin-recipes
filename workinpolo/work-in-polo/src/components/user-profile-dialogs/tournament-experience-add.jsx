
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog'
import { Field, Label } from '@/components/fieldset'
import { Textarea } from '@/components/textarea'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { useState, useEffect } from 'react'




export default function TournamentExperienceAddDialog({
    isTournamentExperienceOpen, 
    setIsTournamentExperienceOpen, 
    tournamentExperienceInfo, 
    setTournamentExperienceInfo,
    selectedExperience = null
}) {

    //States to update the input values
    const [tournamentName, setTournamentName] = useState('');
    const [country, setCountry] = useState('');
    const [yearPlayed, setYearPlayed] = useState('');

    //Edit or add?
    const isEditMode = selectedExperience !== null;

    //Function that deletes the selected experience
    const handleDeleteExperience = () => {
        setTournamentExperienceInfo(tournamentExperienceInfo.filter((exp) => exp.id !== selectedExperience.id));
        setIsTournamentExperienceOpen(false);
    }

    //Adding and editing tournament experience functions
    useEffect(() => {
        if (isEditMode) {
            setTournamentName(selectedExperience.tournamentName);
            setCountry(selectedExperience.country);
            setYearPlayed(selectedExperience.yearPlayed);
        }
        else {
            setTournamentName('');
            setCountry('');
            setYearPlayed('');
        }
    }, [isEditMode, selectedExperience]);

    //Function to add the tournament experience to the state
const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEditMode) {
        //Edit
        setTournamentExperienceInfo((prevInfo) =>
            prevInfo.map((exp) =>
                exp.id === selectedExperience.id
                    ? { ...exp, tournamentName, country, yearPlayed }
                    : exp
            )
        );      
    } else {
        //Add
        setTournamentExperienceInfo((prevInfo) => [...prevInfo, {
            tournamentName: tournamentName,
            country: country,
            yearPlayed: yearPlayed,
            id: crypto.randomUUID()
        }]);
    }

    setTournamentName('');
    setCountry('');
    setYearPlayed('');
    setIsTournamentExperienceOpen(false);
}

    return (
        <Dialog open={isTournamentExperienceOpen} onClose={() => setIsTournamentExperienceOpen(false)}>
        <DialogTitle>Tournament Experience</DialogTitle>
        <DialogDescription>
        Highlight the top tournaments you have played in
        </DialogDescription>
        <DialogBody>
            <Field>
                <Label>Name of the tournament</Label>
                <Input
                name="tournament-name" 
                value={tournamentName}
                onChange={(e) => setTournamentName(e.target.value)}/>
            </Field>
            <Field>
                <Label>Country</Label>
                <Input 
                name="tournament-location" 
                value={country}
                onChange={(e) => setCountry(e.target.value)}/>
            </Field>
            <Field>
                <Label>Year Played</Label>
                <Input 
                name="tournament-date" 
                value={yearPlayed}
                onChange={(e) => setYearPlayed(e.target.value)}/>
            </Field>

        </DialogBody>
        <DialogActions>
            {isEditMode && (
                <Button plain onClick={handleDeleteExperience}>
                    Delete Experience
                </Button>
            )}
            <Button plain onClick={() => setIsTournamentExperienceOpen(false)}>
                Cancel
            </Button>
            <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
    </Dialog>
    )
}