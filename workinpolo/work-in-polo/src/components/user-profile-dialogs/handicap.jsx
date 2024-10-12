import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog'
import { Field, Label } from '@/components/fieldset'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { useState } from 'react'


export default function HandicapDialog({isHandicapOpen, setIsHandicapOpen, handicapInformationInfo, setHandicapInformationInfo}) {


    //States for the fomr fields
    const [outdoorHandicap, setOutdoorHandicap] = useState("");
    const [outdoorAssociation, setOutdoorAssociation] = useState("");
    const [outdoorHighestHandicap, setOutdoorHighestHandicap] = useState("");
    const [outdoorAssociationHighest, setOutdoorAssociationHighest] = useState("");
    const [indoorHandicap, setIndoorHandicap] = useState("");
    const [indoorAssociation, setIndoorAssociation] = useState("");
    const [indoorHighestHandicap, setIndoorHighestHandicap] = useState("");
    const [indoorAssociationHighest, setIndoorAssociationHighest] = useState("");

    //Function to pass the information to the profile on submit
    const handleSubmit = (e) => {
        e.preventDefault();

        setHandicapInformationInfo({
            outdoorHandicap: outdoorHandicap,
            outdoorAssociation: outdoorAssociation,
            outdoorHighestHandicap: outdoorHighestHandicap,
            outdoorAssociationHighest: outdoorAssociationHighest,
            indoorHandicap: indoorHandicap,
            indoorAssociation: indoorAssociation,
            indoorHighestHandicap: indoorHighestHandicap,
            indoorAssociationHighest: indoorAssociationHighest,
        });
        console.log('Handicap Information Info:', handicapInformationInfo);
        setIsHandicapOpen(false);
    }

    return (
        <Dialog open={isHandicapOpen} onClose={() => setIsHandicapOpen(false)}>
        <DialogTitle>Handicap Information</DialogTitle>
        <DialogDescription>
            Edit your handicaps below
        </DialogDescription>
        <DialogBody>
            <Field className="grid grid-cols-1 sm:grid-cols-2 items-center">
                <Label>What is your current outdoor handicap?</Label>
                <Input name="outdoor-handicap" value={outdoorHandicap} onChange={(e) => setOutdoorHandicap(e.target.value)}/>
                <Label>From which association?</Label>
                <Input name="outdoor-association" value={outdoorAssociation} onChange={(e) => setOutdoorAssociation(e.target.value)}></Input>
            </Field>
            <Field className="grid grid-cols-1 sm:grid-cols-2 items-center">
                <Label>What was your highest outdoor handicap?</Label>
                <Input name="outdoor-highest-handicap" value={outdoorHighestHandicap} onChange={(e) => setOutdoorHighestHandicap(e.target.value)}/>
                <Label>From which association?</Label>
                <Input name="outdoor-association-highest" value={outdoorAssociationHighest} onChange={(e) => setOutdoorAssociationHighest(e.target.value)}></Input>
            </Field>
            <Field className="grid grid-cols-1 sm:grid-cols-2 items-center">
                <Label>What is your current indoor handicap?</Label>
                <Input name="indoor-handicap" value={indoorHandicap} onChange={(e) => setIndoorHandicap(e.target.value)}/>
                <Label>From which association?</Label>
                <Input name="indoor-association" value={indoorAssociation} onChange={(e) => setIndoorAssociation(e.target.value)}></Input>
            </Field>
            <Field className="grid grid-cols-1 sm:grid-cols-2 items-center">
                <Label>What was your highest indoor handicap?</Label>
                <Input name="indoor-highest-handicap" value={indoorHighestHandicap} onChange={(e) => setIndoorHighestHandicap(e.target.value)}/>
                <Label>From which association?</Label>
                <Input name="indoor-association-highest" value={indoorAssociationHighest} onChange={(e) => setIndoorAssociationHighest(e.target.value)}></Input>
            </Field>
        </DialogBody>
        <DialogActions>
            <Button plain onClick={() => setIsHandicapOpen(false)}>
                Cancel
            </Button>
            <Button onClick={handleSubmit}>Edit</Button>
        </DialogActions>
    </Dialog>
    )
}