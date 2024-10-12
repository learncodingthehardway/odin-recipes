import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog'
import { Field, Label } from '@/components/fieldset'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Select } from '@/components/select'

export default function LanguagesAddDialog({isLanguagesOpen, setIsLanguagesOpen}) {
    return (
        <Dialog open={isLanguagesOpen} onClose={() => setIsLanguagesOpen(false)}>
            <DialogTitle>Languages</DialogTitle>
            <DialogDescription>
                Edit your languages below
            </DialogDescription>
            <DialogBody>
                <Field className="grid grid-cols-1 sm:grid-cols-2 items-center">
                    <Label>Language</Label>
                    <Input name="language" />
                        <Label>Level</Label>
                        <Select name="level">
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                            <option value="native">Native</option>
                        </Select>
                </Field>
            </DialogBody>
            <DialogActions>
                <Button plain onClick={() => setIsLanguagesOpen(false)}>
                    Cancel
                </Button>
                <Button onClick={() => setIsLanguagesOpen(false)}>Edit</Button>
            </DialogActions>
        </Dialog>
    )
}