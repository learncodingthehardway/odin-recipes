import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog'
import { Field, Label } from '@/components/fieldset'
import { Textarea } from '@/components/textarea'
import { Button } from '@/components/button'


export default function AboutMeDialog({isAboutMeOpen, setIsAboutMeOpen, aboutMeInfo, setAboutMeInfo}) {
    return (
        <Dialog open={isAboutMeOpen} onClose={() => setIsAboutMeOpen(false)}>
            <DialogTitle>About Me</DialogTitle>
            <DialogDescription>
                Edit your Bio below
            </DialogDescription>
            <DialogBody>
                <Field>
                    <Label>About Me</Label>
                    <Textarea 
                    className="h-[30vh]"
                    name="description"
                    value={aboutMeInfo}
                    onChange={(e) => setAboutMeInfo(e.target.value)}
                    />
                </Field>
            </DialogBody>
            <DialogActions>
                <Button plain onClick={() => setIsAboutMeOpen(false)}>
                    Cancel
                </Button>
                <Button onClick={() => setIsAboutMeOpen(false)}>Edit</Button>
            </DialogActions>
        </Dialog>
    )
}