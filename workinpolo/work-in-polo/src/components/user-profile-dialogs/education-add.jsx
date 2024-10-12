import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog'
import { Field, Label } from '@/components/fieldset'
import { Textarea } from '@/components/textarea'
import { Button } from '@/components/button'
import { Input } from '@/components/input'

export default function EducationAddDialog({isEducationOpen, setIsEducationOpen}) {
    return (
        <Dialog open={isEducationOpen} onClose={() => setIsEducationOpen(false)}>
        <DialogTitle>Education</DialogTitle>
        <DialogDescription>
            Edit your Education below
        </DialogDescription>
        <DialogBody>
            <Field>
                <Label>Institution Name</Label>
                <Input name="education-institution" />
            </Field>
            <Field>
                <Label>Degree</Label>
                <Input name="education-degree" />
            </Field>
            <Field>
                <Label>Graduation Year</Label>
                <Input name="education-graduation-year" />
            </Field>
        </DialogBody>
        <DialogActions>
            <Button plain onClick={() => setIsEducationOpen(false)}>
                Cancel
            </Button>
            <Button onClick={() => setIsEducationOpen(false)}>Edit</Button>
        </DialogActions>
    </Dialog>
    )
}