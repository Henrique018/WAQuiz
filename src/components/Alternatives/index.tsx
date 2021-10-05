import {
  FormControlLabel,
  FormControlLabelProps,
  Grid,
  RadioGroup,
  Radio
} from '@material-ui/core';

import * as S from './styles';

type AlternativesProps = {
  answers: string[];
  onChange: FormControlLabelProps['onChange'];
};

const Alternatives = ({ answers, onChange }: AlternativesProps) => {
  return (
    <RadioGroup aria-label="alternatives" name="alternative">
      <Grid
        sx={{ width: '100%' }}
        container
        alignItems="center"
        justifyContent="center"
        gap="15px"
      >
        {answers.map((answer, index) => (
          <Grid item xs={12} md={6} key={index}>
            <S.AlternativeWrapper>
              <FormControlLabel
                sx={{ width: '100%', justifyContent: 'space-around' }}
                control={<Radio />}
                label={
                  <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                }
                labelPlacement="start"
                value={answer}
                onChange={onChange}
              />
            </S.AlternativeWrapper>
          </Grid>
        ))}
      </Grid>
    </RadioGroup>
  );
};

export default Alternatives;
