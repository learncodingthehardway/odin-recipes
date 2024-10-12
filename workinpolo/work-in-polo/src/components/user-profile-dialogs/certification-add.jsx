import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog'
import { Field, Label } from '@/components/fieldset'
import { Textarea } from '@/components/textarea'
import { Button } from '@/components/button'
import { Input } from '@/components/input'

export default function CertificationAddDialog({isCertificationOpen, setIsCertificationOpen}) {
    return (
        <Dialog open={isCertificationOpen} onClose={() => setIsCertificationOpen(false)}>
        <DialogTitle>Education</DialogTitle>
        <DialogDescription>
            Edit your Certification below
        </DialogDescription>
        <DialogBody>
            <Field>
                <Label>Certification Name</Label>
                <Input name="certification-name" />
            </Field>
            <Field>
                <Label>Certification Issuer</Label>
                <Input name="certification-issuer" />
            </Field>
            <Field>
                <Label>Certification Year</Label>
                <Input name="certification-date" />
            </Field>
        </DialogBody>
        <DialogActions>
            <Button plain onClick={() => setIsCertificationOpen(false)}>
                Cancel
            </Button>
            <Button onClick={() => setIsCertificationOpen(false)}>Edit</Button>
        </DialogActions>
    </Dialog>
    )
}