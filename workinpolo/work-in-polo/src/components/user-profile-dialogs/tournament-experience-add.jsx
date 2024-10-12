
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog'
import { Field, Label } from '@/components/fieldset'
import { Textarea } from '@/components/textarea'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { useState } from 'react'




export default function TournamentExperienceAddDialog({isTournamentExperienceOpen, setIsTournamentExperienceOpen, tournamentExperienceInfo, setTournamentExperienceInfo}) {

    //States to update the input values
    const [tournamentName, setTournamentName] = useState('');
    const [country, setCountry] = useState('');
    const [yearPlayed, setYearPlayed] = useState('');


    //Function to add the tournament experience to the state
const handleSubmit = (e) => {
    e.preventDefault();
    
    setTournamentExperienceInfo((prevInfo) => [...prevInfo, {
        tournamentName: tournamentName,
        country: country,
        yearPlayed: yearPlayed,
        id: crypto.randomUUID()
    }]);

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
            <Button plain onClick={() => setIsTournamentExperienceOpen(false)}>
                Cancel
            </Button>
            <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
    </Dialog>
    )
}